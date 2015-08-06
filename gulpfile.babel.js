import gulp from "gulp";
import webpackStream from "webpack-stream";
import webpackConfig from "./webpack.config";

const DEV = "dev";
const WEBPACK_DEV = "webpack:dev";

gulp.task(WEBPACK_DEV, () => {
	return gulp.src("public/js/index.jsx")
		.pipe(webpackStream(webpackConfig))
		.pipe(gulp.dest("public/dist/"))
});

gulp.task(DEV, [ WEBPACK_DEV ]);
