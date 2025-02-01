import JSZip from 'jszip'

export const downloadImage = (url: string, filename: string) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = `${filename}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
    .catch(console.error)
}

export const downloadImagesAsZip = async (images: { url: string; title: string }[]) => {
  const zip = new JSZip()

  const imagePromises = images.map(async (image) => {
    const response = await fetch(image.url)
    const blob = await response.blob()
    zip.file(`${image.title}.jpg`, blob)
  })

  await Promise.all(imagePromises)

  const zipBlob = await zip.generateAsync({ type: 'blob' })
  const zipLink = document.createElement('a')
  zipLink.href = URL.createObjectURL(zipBlob)
  zipLink.download = 'selected_pets.zip'
  document.body.appendChild(zipLink)
  zipLink.click()
  document.body.removeChild(zipLink)
}
