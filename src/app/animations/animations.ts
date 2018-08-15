import { animate, transition, trigger, style } from "@angular/animations";

export var fade = trigger("fade", [
  transition("void => *", [
    style({
      opacity: 0,
      transform: "scale(0.5)"
    }),
    animate("300ms ease-out", style({ opacity: 1, transform: "scale(1)" }))
  ])
]);
