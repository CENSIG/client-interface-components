import gulp from "gulp";
import webpack from "webpack";
import webpackConfig from "./webpack.config";

const DEV = "dev";
const WEBPACK_DEV = "webpack:dev";

gulp.task(WEBPACK_DEV, () => {
	webpack(webpackConfig);
});

gulp.task(DEV, () => {
	gulp.watch([
		"lib/**/*",
		"public/js/index.jsx",
	], [ WEBPACK_DEV ]);
});
