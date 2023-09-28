let transitionState = Promise.resolve();
let resolveTransition = null;

export function transitionOut() {
  transitionState = new Promise((resolve) => {
    resolveTransition = resolve;
  });
}

export function transitionIn() {
  if (resolveTransition != null) {
    resolveTransition();
    resolveTransition = null;
  }
}

export function pageTransition() {
  return transitionState;
}
