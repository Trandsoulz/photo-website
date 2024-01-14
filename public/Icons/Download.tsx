import * as React from "react"
import { SVGProps } from "react"
const Download = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    style={{
      fill: "#fff",
    }}
    {...props}
  >
    <path d="m12 16 4-5h-3V4h-2v7H8z" />
    <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
  </svg>
)
export default Download
