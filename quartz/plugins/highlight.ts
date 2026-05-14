import { QuartzTransformerPlugin } from "./types"

export const HighlightTransform: QuartzTransformerPlugin = () => {
  return {
    name: "HighlightTransform",
    textTransform(_ctx, src) {
      return src.replace(/==(.+?)==/g, "<mark>$1</mark>")
    },
  }
}
