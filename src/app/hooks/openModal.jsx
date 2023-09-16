
function openModal() {
    
    const getInfoModalId = document.getElementById("infoModal").classList
    const getInfoModalContentId = document.getElementById("infoModalContent").classList
    
    if(getInfoModalId.contains("invisible") && getInfoModalContentId.contains("invisible")){
        getInfoModalContentId.remove("invisible")
        getInfoModalContentId.add("visible")
        getInfoModalId.remove("invisible")
        getInfoModalId.add("visible")

    }else{
        getInfoModalContentId.remove("visible")
        getInfoModalContentId.add("invisible")
        getInfoModalId.remove("visible")
        getInfoModalId.add("invisible")
    }
    
    
}

export default openModal