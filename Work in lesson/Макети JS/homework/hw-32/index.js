class CountdownTimer 
{
    constructor({ selector, targetDate }) 
    {
        this.selector = document.querySelector(selector)
        this.targetDate = targetDate  
        this.daysEl = this.selector.querySelector('[data-value="days"]')
        this.hoursEl = this.selector.querySelector('[data-value="hours"]')
        this.minsEl = this.selector.querySelector('[data-value="mins"]')
        this.secsEl = this.selector.querySelector('[data-value="secs"]')  
        this.start()
    }

    start() 
    {
        this.update() 
        this.timer = setInterval(() => this.update(), 1000)
    }

    update() 
    {
        let time = this.targetDate - new Date()

        if (time <= 0) 
        {
            clearInterval(this.timer)
            this.setValues(0, 0, 0, 0)
            return
        }

        let days = Math.floor(time / (1000 * 60 * 60 * 24))

        let hours = Math.floor
        (
            (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )

        let mins = Math.floor
        (
            (time % (1000 * 60 * 60)) / (1000 * 60)
        )

        let secs = Math.floor
        (
            (time % (1000 * 60)) / 1000
        )

        this.setValues(days, hours, mins, secs)
    }

    setValues(d, h, m, s) 
    {
        this.daysEl.textContent = this.format(d)
        this.hoursEl.textContent = this.format(h)
        this.minsEl.textContent = this.format(m)
        this.secsEl.textContent = this.format(s)
    }

    format(value) 
    {
        return String(value).padStart(2, "0")
    }
}

new CountdownTimer
({
    selector: "#timer-1",
    targetDate: new Date("Jul 17, 2026 00:00:00"),
})