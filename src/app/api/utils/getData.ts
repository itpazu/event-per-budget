import { EventProps } from "@/app/components/event";

export const getData = (): Promise<EventProps[]> => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: "מוסיקה",
                category: 'מוסיקה',
                cost: 300,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 2,
                name: "מוסיקה",
                category: 'מוסיקה',
                cost: 100,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 3,
                name: "מוסיקה",
                category: 'מוסיקה',
                cost: 100,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 4,
                name: "מוסיקה",
                category: 'מוסיקה',
                cost: 200,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 5,
                name: "מוסיקה",
                category: 'מוסיקה',
                cost: 300,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 6,
                name: "טיול",
                category: 'טיול',

                cost: 300,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 7,
                name: "טיול",
                category: 'טיול',

                cost: 300,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            },
            {
                id: 8,
                name: "רכיבה",
                category: 'ספורט',

                cost: 300,
                details: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן קולורס מונפרד אדנדום סילקוף,"
            }
        ])
    })
}

export const optimal_combination = (budget: number, programs: number[]) => {
    const n = programs.length; //=
    const PPP = Array.from({ length: n + 1 }, () => Array(budget + 1).fill(0));

    for (let i = 1; i <= programs.length; i++) {
        i;

        for (let j = 1; j <= budget; j++) {
            if (programs[i - 1] > j) {
                PPP[i - 1][j];
                PPP[i].splice(j, 1, PPP[i - 1][j]);
                PPP; //=
            } else {
                let cummulativeCost =
                    PPP[i - 1][j - Math.floor(programs[i - 1])] +
                    programs[i - 1];
                if (cummulativeCost > budget) {
                    cummulativeCost = PPP[i][j - 1];
                }
                PPP[i].splice(j, 1, Math.max(PPP[i - 1][j], cummulativeCost));
            }
        }
    }
    let remainingBduget = budget;
    let programNumber = n;
    let optimalCombo = [];

    while (remainingBduget > 0 && programNumber > 0) {
        if (
            PPP[programNumber][Math.ceil(remainingBduget)] ===
            PPP[programNumber - 1][Math.ceil(remainingBduget)]
        ) {
            programNumber--;
        } else {
            optimalCombo.push(programs[programNumber - 1]);
            remainingBduget -= programs[programNumber - 1];
            programNumber--;
        }
    }
    return optimalCombo;
};