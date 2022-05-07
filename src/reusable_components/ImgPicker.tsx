// interface ImgPickerDefinition {
// 	(imgName: string, defaultPath?: string): string;
// }
export const ImgPicker = (imgName: string) => {
	console.log("../assets/images/" + imgName + ".png");
	return require("../assets/images/" + imgName + ".png");
};
