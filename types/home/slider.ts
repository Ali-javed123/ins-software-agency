// types/home/slider.ts
export interface HomeSliderItem {
  id: number;
  bg: string;
  title: string;
}
export interface OwlOptions {
  loop: boolean;
  items: number;
  autoplay: boolean;
  autoplayTimeout: number;
  smartSpeed: number;
  nav: boolean;
  dots: boolean;
  margin: number;
  animateOut?: string;
  animateIn?: string;
}
