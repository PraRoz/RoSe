export const imagePath =(imageName:string) =>{
    const path = process.env.REACT_APP_IMAGE_PATH
    const imageWithPath = path?.concat(imageName)
    return imageWithPath
} 