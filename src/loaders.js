const URL = "https://port-lab.onrender.com"

export const projectsLoader = async () => {
    const res = await fetch(URL + "/projects")
    const projects = await res.json()
    return projects
}

export const aboutLoader = async () => {
    const res = await fetch(URL + "/about")
    const about = await res.json()
    return about
}
