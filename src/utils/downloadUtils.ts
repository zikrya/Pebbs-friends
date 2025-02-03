import JSZip from "jszip"

export const downloadImage = async (url: string, filename: string) => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `${filename}.jpg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error("Error downloading image:", error)
  }
}

export const downloadImagesAsZip = async (
  images: { url: string; title: string }[],
  setProgress: (progress: number) => void
) => {
  const zip = new JSZip()
  let completed = 0

  const imagePromises = images.map(async (image) => {
    try {
      const response = await fetch(image.url)
      const blob = await response.blob()
      zip.file(`${image.title}.jpg`, blob)

      completed++
      setProgress(Math.round((completed / images.length) * 100)) // ✅ Update progress bar
    } catch (error) {
      console.error(`Error downloading ${image.title}:`, error)
    }
  })

  await Promise.all(imagePromises)

  const zipBlob = await zip.generateAsync({ type: "blob" })
  const zipLink = document.createElement("a")
  zipLink.href = URL.createObjectURL(zipBlob)
  zipLink.download = "selected_pets.zip"
  document.body.appendChild(zipLink)
  zipLink.click()
  document.body.removeChild(zipLink)
}
