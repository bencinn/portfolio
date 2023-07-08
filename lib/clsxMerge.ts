import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const clsMerge = (...classes: ClassValue[]) => twMerge(clsx(...classes));
