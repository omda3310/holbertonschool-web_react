import { normalize, schema } from "normalizr";

const courses = new schema.Entity("courses");

const coursesNormalize = (data) => {
    const normalizeDT = normalize(data, [courses]);

	return normalizeDT.entities.courses;
};

export default coursesNormalize;