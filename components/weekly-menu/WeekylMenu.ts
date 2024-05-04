export interface WeeklyMenu{
    weeklyGroups: WeeklyGroup[]
}

export interface WeeklyGroup{
    dailyMenus: DailyMenu[]
}

export interface DailyMenu{
    day: string,
    foods: string
}