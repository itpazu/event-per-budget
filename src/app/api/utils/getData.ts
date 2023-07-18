export type EventProps = {
    id: number
    name: string;
    cost: number;
    details: string;
}
export const getData = (): Promise<EventProps[]> => {
    return new Promise((resolve, reject) => {
        resolve([
            {
                id: 1,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 2,
                name: "music",
                cost: 100,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 3,
                name: "music",
                cost: 100,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 4,
                name: "music",
                cost: 200,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 5,
                name: "music",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 6,
                name: "musician",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 7,
                name: "musician",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
            },
            {
                id: 8,
                name: "musician",
                cost: 300,
                details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
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