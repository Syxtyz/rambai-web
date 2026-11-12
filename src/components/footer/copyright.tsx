import { cacheLife } from "next/cache"

export default async function Copyright() {
  "use cache"
  cacheLife("days")

  const year = new Date().getFullYear()

  return <p className="text-sm text-muted-foreground">© {year} RambAI. All rights reserved.</p>
}