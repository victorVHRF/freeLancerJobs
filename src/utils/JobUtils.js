module.exports = {
  remainingDays(job) {
    //ajustes no job
    //calculo de tempo restante
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDate() + Number(remainingDays)
    const dueDateInMs = createdDate.setDate(dueDay)

    const timeDiffInMs = dueDateInMs - Date.now()
    //transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24
    const daydiff = Math.ceil(timeDiffInMs / dayInMs)
    //restam x dias
    return daydiff
  },
  calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}