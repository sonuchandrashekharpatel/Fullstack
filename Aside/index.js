export default function lessonGenerator(chapterName, lesson, chapterNum) {

    console.log(`/* Chapter - ${chapterNum}: ${chapterName} */\n`)
    
    for(let i = lesson.length - 1; i >= 0; i--) {
        console.log(`/* Lesson ${i + 1}: ${lesson[i]} */\n\n`)
    }
    
    console.log(`<!-- Chapter - ${chapterNum}: ${chapterName} -->\n`)
    
    for(let i = lesson.length - 1; i>= 0; i--) {
        console.log(`<!-- Lesson ${i + 1}: ${lesson[i]} -->\n\n`)
    }

    console.log(`/* Chapter - ${chapterNum}: ${chapterName} */\n`)
    for(let i = 0; i <= lesson.length - 1; i++) {
        console.log(`/* Lesson ${i + 1}: ${lesson[i]} */\n\n`)
    }

}
