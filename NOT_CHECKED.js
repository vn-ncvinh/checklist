function checklist(e) {
    e.checkList.forEach(checked)
}

function checked(e) {
    send("PUT", "/task/checklist/change", JSON.stringify({
        taskAssigneeBugListId: e.id,
        status: "NOT_CHECKED"
    })).then(e => console.log(e))
}

function checklists(e) {
    send("GET", "/task/" + window.location.href.split("/")[5] + "/checklist/" + e).then(e => e.forEach(checklist))
}

async function send(e, t, c) {
    return (res = await fetch(origin + "/api" + t, {
        method: e,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Token: localStorage.getItem("token")
        },
        body: c
    })).json()
}

send("GET", "/profile/profile").then(e => checklists(e.id));