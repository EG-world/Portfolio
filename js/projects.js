const categories = document.querySelector('.categories')
const projectsConstainer = document.querySelector('.projects')
const projects = document.querySelectorAll('.project')

categories.addEventListener('click', (e) => {
    const filter = e.target.dataset.category // data-category 를 읽어올 수 있음
    // console.log(filter)
    if (filter == null) {
        return;
    }
    activeSelection(e.target)
    
    filterProjects(filter)
})

function activeSelection(target) {
    const active = document.querySelector('.category--selected')
    active.classList.remove('category--selected')
    target.classList.add('category--selected')
}

// 요소.target.dataset.type (target생략 가능)
function filterProjects(filter) {
    projects.forEach((project) => {
        if (filter === 'all' || filter === project.dataset.type) {
            project.style.display = 'block'
        }else {
            project.style.display = 'none'
        }
    })
    projectsConstainer.classList.add('anim-out')
    setTimeout(() => {  // 시간이 끝나면 함수 실행
        projectsConstainer.classList.remove('anim-out')
    }, 200)
}
