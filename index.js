const modelSrc = [
    {
        name: "Yamaha 500",
        src: "3dModels/yamaha_500/scene.gltf",
        downloadLink: "3dModelsDownload/yamaha_500_custom_motorbike.zip"
    },
    {
        name: "Pacobot",
        src: "3dModels/pacobot/scene.gltf",
        downloadLink: "3dModelsDownload/pacobot.zip"
    },
    {
        name: "Helpy Blender",
        src: "3dModels/helpy_blender/scene.gltf",
        downloadLink: "3dModelsDownload/helpy_blender_port.zip"
    },
    {
        name: "Bang Flaregun",
        src: "3dModels/bang_flaregun/scene.gltf",
        downloadLink: "3dModelsDownload/bang_flaregun.zip"
    },
]

const modelViewer = document.querySelector("model-viewer")
const next = document.querySelector(".right")
const prev = document.querySelector(".left")
const downloadLink = document.querySelector(".download-link")
const modelName = document.querySelector(".model-name")

let currSrcInd = 0

const prevBtn = () => {
    console.log(currSrcInd)
    if (currSrcInd > 0) {
        currSrcInd -= 1
        // console.log(modelSrc[currSrcInd].src)
        // console.log(modelSrc[currSrcInd].downloadLink)
    } else {
        currSrcInd = modelSrc.length - 1
    }
    updateModel(currSrcInd)
}

const nextBtn = () => {
    console.log(currSrcInd)
    if (currSrcInd < modelSrc.length) {
        currSrcInd += 1
    } else {
        currSrcInd = 0
    }
    updateModel(currSrcInd)
}

const updateModel = (currSrcInd) => {
    modelName.textContent = modelSrc[currSrcInd].name
    modelViewer.src = modelSrc[currSrcInd].src
    downloadLink.href = modelSrc[currSrcInd].downloadLink
}

next.addEventListener("click", nextBtn)
prev.addEventListener("click", prevBtn)

document.addEventListener("load", updateModel(2))
