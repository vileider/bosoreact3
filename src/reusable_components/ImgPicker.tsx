interface ImgPickerDefinition {
	ImgPicker: (imgName:string)=> NodeRequire
}

export default function ImgPicker:ImgPickerDefinition>(imgName, defaultPath = "../assets/images") {
	return require(defaultPath + imgName + ".png").default;
}
