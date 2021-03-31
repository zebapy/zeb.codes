---
title: Toast alert popups using React, Tailwind CSS, and Zustand state management
date: 2020-02-10
image: ./toast.png
alt: A mock of a browser with a toast alert pop up in the bottom right.
caption: Thank you [heroicons.com](https://heroicons.com) for the checkmark icon.
categories:
  - react
  - tailwind
  - css
---

_Wait. Toast?_

Sometimes UI components have silly names. Hamburger menus. Pills. Skeletons. Toast are the little alerts you get at the bottom of your screen after taking an action or somethign successfully triggers. Ya know, like toast popping out of a toaster (or a "down dinger" as my old colleague would say).

Recently I've been puttering on an app of mine and had the need to cook up some toast. I like how they can grab attention via animation.

I will admit, I haven't done research on whether or not more contextual errors (specifically an alert above a form after a server response) are a better user experience over the toast. I look at it this way.

- Toast might be less jaring as they can smoothly transition in.
- Multiple can stack up easily

Again, your usage of toast should depend on the context you use them within. They may not suit every need for an alert.

### Creating a toaster

In this example, I use [zustand](https://github.com/pmndrs/zustand) for global state management. It's a tidy little package and easier to set up than doing multiple React context. Granted you _should_ probably use [React context](https://reactjs.org/docs/context.html) if you don't have a need for a separate global state manager. I happened to be using it already in the app I originally wrote this in, so hey, why not include it in the post.

I'm also using TypeScript but it should be easy enough to follow if you know JavaScript already.

#### Create the Zustand store

First we want to set up our state manager and its types.

```ts
// This holds the details about a 'slice' of toast.
// We can add to it later, like if we want to control
// what icon it has or what kind of alert it is (warning, success, etc).
interface ToastSlice {
  // It'll need an ID so we can remove it later via methods.
  id: string;

  // For now, we'll just store the text for the popup.
  text: string;
}

// This is the whole shape for the Zustand store
type ToastState = {
  // We can have multiple toast pop up at once,
  // so store an array of them.
  toast: ToastSlice[];
};

// we can tell zustand to expect the above state using the
// TypeScript generic arg (the `<ToastState>`)
const useToastStore = create<ToastState>((set) => ({
  toast: []
}));
```

Next we need to be able to add some toast, so we'll create a method for this.
Zustand makes it easy: we add the method right into the state object.

```ts
import { uniqueId } from 'lodash';

const useToastStore = create<ToastState>((set) => ({
  toast: [],
  // add the method here
  addToast: (toast: ToastSlice) => {
    // we have to create a unique id for each alert.
    const id = uniqueId();

    const newToast = {
      id,
      ...toast
    };

    // now we create the new toast slice when addToast is called
    set((state) => ({
      toast: [
        // keep existing toast!
        ...state.toast
        // Add the new toast
        newToast
      ]
    }));

  }
}));
```

Hang on though. Toast will be added whenever you call `addToast({text: 'Some message'})` but they will stick around _forever_.

We need to make toast disappear a few seconds after they pop up. This can be done by adding a simple `setTimeout` at the end of our create toast method.

<!-- todo: fix formatting -->

```ts
addToast: (toast: ToastSlice) => {

    const id = uniqueId();

    const newToast = {
      id,
      ...toast
    };

    set((state) => ({
      toast: [
        ...state.toast
        newToast
      ]
    }));

  // now we'll start a timeout
  setTimeout(() => {
    // this will be called after our
    set((state) => ({
      // we can remove the slice of toast by filtering out
      // at toast with the newly created id (the toast we just made)
      toast: state.toast.filter((t) => t.id !== id)
    }));
    // 2 seconds till toast is gone
  }, 2000);
}
```

TODO:

- render the basic toast with react
- show example of calling `useToast()` hook
- enhance the toast with variants/icons
- enhance with dismiss
- show working example on codepen or codesandbox
- react context example

### Final result

```tsx
import { uniqueId } from 'lodash';
import create from 'zustand';
import CheckIcon from 'heroicons/outline/check-circle.svg';
import ErrorIcon from 'heroicons/outline/exclamation-circle.svg';
import clsx from 'clsx';

type Variant = 'success' | 'error';

function ToastSlice({
  variant = 'success',
  text
}: {
  text: string;
  variant?: Variant;
}) {
  const classes = clsx('border-lg p-4 rounded-lg flex items-start', {
    'bg-emerald-400': variant === 'success',
    'bg-red-400': variant === 'error'
  });

  const icons: Record<Variant, any> = {
    success: <CheckIcon />,
    error: <ErrorIcon />
  };

  const toastIcon = icons[variant];

  return (
    <div className={classes}>
      <div className="w-6 h-6 mr-3 text-gray-800 flex-shrink-0">
        {toastIcon}
      </div>
      <div>
        <p className="text-base font-semibold text-gray-800">{text}</p>
      </div>
    </div>
  );
}

interface ToastSlice {
  id?: string;
  text: string;
  variant?: Variant;
}

type ToastState = {
  toast: ToastSlice[];
  addToast: (toast: ToastSlice) => void;
};

const useToastStore = create<ToastState>((set) => ({
  toast: [],
  addToast: (toast: ToastSlice) => {
    const id = uniqueId();

    set((state) => ({
      toast: [
        ...state.toast,
        {
          id,
          ...toast
        }
      ]
    }));

    setTimeout(() => {
      set((state) => ({
        toast: state.toast.filter((t) => t.id !== id)
      }));
    }, 2000);
  }
}));

export function useAddToast() {
  return useToastStore((state) => state.addToast);
}

export function Toaster() {
  const toast = useToastStore((state) => state.toast);
  return (
    <ul className="max-w-md fixed bottom-4 right-4">
      {toast.map(({ id, text, variant }) => {
        return (
          <li key={id} className="mb-4">
            <ToastSlice text={text} variant={variant} />
          </li>
        );
      })}
    </ul>
  );
}
```
