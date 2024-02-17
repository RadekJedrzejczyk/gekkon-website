import type { Component } from "vue";

export interface GridItem {
  description: Component,
  object: Component,
}

export interface LinkItem {
  name: string,
  title: string
}