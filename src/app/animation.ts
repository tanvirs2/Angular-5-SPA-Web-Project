import {animate, style, transition, trigger} from "@angular/animations";

export let fade = trigger('fade', [
  transition('void => *', [
    style({opacity: 0 }),
    animate(800)
    //style({left: 200, opacity: 0 }),
    //animate(500, style({left: 0, opacity: 1 }))
  ]),
  transition('* => void', [
    animate(1000, style({left: 200, opacity: 0 }))
    //animate(1000, style({opacity: 0 }))
  ])
]);
