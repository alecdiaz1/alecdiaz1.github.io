import { MDXProvider } from "@mdx-js/react"
import * as DesignSystem from "your-design-system"


export default function PostLayout({ children }) {
    return (
        <MDXProvider
            components={{
            // Map HTML element tag to React component
            // h1: DesignSystem.H1,
            // h2: DesignSystem.H2,
            // h3: DesignSystem.H3,
            // Or define component inline
            h1: props => <h1 {...props} style={{ color: "rebeccapurple" }} />,
            }}
        >
        {children}
        </MDXProvider>
    )
}