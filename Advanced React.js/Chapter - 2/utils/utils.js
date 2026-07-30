/* Chapter - 2: Performance */

/* Lesson 19: Solo Project - Component Library++ */


/* Lesson 18: useCallback() practice 👻👻👻*/


/* Lesson 17: useCallback() 👻*/


/* Lesson 16: useMemo() practice 👻*/


/* Lesson 15: useMemo(), React.memo(), and referential equality 👻*/


/* Lesson 14: Value vs. Reference Types & referential equality 👻*/


/* Lesson 13: React.memo() practice 👻*/
export function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while(Date.now() < wakeUpTime) {} 
}

/* Lesson 10: useMemo() */ 
/* 
export function slowCountItems(data, ms) {
  const wakeUpTime = Date.now() + ms;
  while(Date.now() < wakeUpTime) {}
  return data.length
} */