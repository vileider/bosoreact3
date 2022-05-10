interface ImgPickerDefinition {
	(
		imgName: string
		//Once different path needed -> //defaultPath?: string
	): string;
}
export const ImgPicker: ImgPickerDefinition = (imgName) => {
	console.log("../assets/images/" + imgName + ".png");
	return require("../assets/images/" + imgName + ".png");
};
