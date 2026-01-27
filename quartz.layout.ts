import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Created with Quartz": "https://quartz.jzhao.xyz/",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const nameOrder = ["Introduction", "List of Terms Used in This Book"]
        if (a.isFolder && b.isFolder) {
          if (a.displayName.startsWith("PART") && !b.displayName.startsWith("PART")) {
            return -1
          }
          if (!a.displayName.startsWith("PART") && b.displayName.startsWith("PART")) {
            return 1
          }
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && !b.isFolder) {
          if (nameOrder.includes(a.displayName) || nameOrder.includes(b.displayName)) {
            const indexA = nameOrder.indexOf(a.displayName)
            const indexB = nameOrder.indexOf(b.displayName)
            if (indexA !== -1 && indexB !== -1) return indexA - indexB
            if (indexA !== -1) return -1
            if (indexB !== -1) return 1
          }

          if (a.displayName.startsWith("PART") && !b.displayName.startsWith("PART")) {
            return -1
          }
          if (!a.displayName.startsWith("PART") && b.displayName.startsWith("PART")) {
            return 1
          }

          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        // Mixed case: one folder, one file
        if (nameOrder.includes(a.displayName)) return -1
        if (nameOrder.includes(b.displayName)) return 1

        // Default: folders first
        if (a.isFolder && !b.isFolder) {
          if (b.displayName.startsWith("PART")) return 1
          return -1
        }
        if (!a.isFolder && b.isFolder) {
          if (a.displayName.startsWith("PART")) return -1
          return 1
        }

        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        const nameOrder = ["Introduction", "List of Terms Used in This Book"]
        if (a.isFolder && b.isFolder) {
          if (a.displayName.startsWith("PART") && !b.displayName.startsWith("PART")) {
            return -1
          }
          if (!a.displayName.startsWith("PART") && b.displayName.startsWith("PART")) {
            return 1
          }
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        if (!a.isFolder && !b.isFolder) {
          if (nameOrder.includes(a.displayName) || nameOrder.includes(b.displayName)) {
            const indexA = nameOrder.indexOf(a.displayName)
            const indexB = nameOrder.indexOf(b.displayName)
            if (indexA !== -1 && indexB !== -1) return indexA - indexB
            if (indexA !== -1) return -1
            if (indexB !== -1) return 1
          }

          if (a.displayName.startsWith("PART") && !b.displayName.startsWith("PART")) {
            return -1
          }
          if (!a.displayName.startsWith("PART") && b.displayName.startsWith("PART")) {
            return 1
          }

          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }

        // Mixed case: one folder, one file
        if (nameOrder.includes(a.displayName)) return -1
        if (nameOrder.includes(b.displayName)) return 1

        // Default: folders first
        if (a.isFolder && !b.isFolder) {
          if (b.displayName.startsWith("PART")) return 1
          return -1
        }
        if (!a.isFolder && b.isFolder) {
          if (a.displayName.startsWith("PART")) return -1
          return 1
        }

        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },
    }),
  ],
  right: [],
}
