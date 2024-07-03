export interface WeeklyMenu{
    weeklyGroups: WeeklyGroup[]
}

export interface WeeklyGroup{
    weeklyTitle: string,
    dailyMenus: DailyMenu[]
}

export interface DailyMenu{
    day: string,
    foods: string
}