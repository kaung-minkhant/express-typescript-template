import { ZodIssue } from "zod";

export const formatZodErrorWithPath = (
  issues: ZodIssue[],
  possibleErrorKeys: string[],
  outputType: "map" | "object" | "string" = "map"
) => {
  const errorMap = new Map<string, any>();
  issues.forEach((error) => {
    const intersection = arrayIntersect(possibleErrorKeys, error.path);
    if (intersection) {
      errorMap.set(intersection, error.message);
    }
  });
  if (outputType === "object") {
    return mapToObject(errorMap);
  } else if (outputType === "string") {
    let errorString: string = "Error Occured: ";
    let errorStringArr: string[] = []
    errorMap.forEach((value, key) => {
      errorStringArr.push(`${key}: ${value}`);
    });
    errorString += errorStringArr.join(" -- ");
    return errorString
  }
  return errorMap;
};

const arrayIntersect = (arr1: any[], arr2: any[]) => {
  const intersection = arr1.filter((item) => arr2.includes(item))[0];
  return intersection;
};

const mapToObject = (dataMap: Map<any, any>) => {
  const obj: Record<any, any> = {};
  dataMap.forEach((value, key) => {
    obj[key] = value;
  });
  return obj;
};