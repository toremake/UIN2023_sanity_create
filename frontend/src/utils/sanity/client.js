import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: "p8svrcay",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

export const writeClient = createClient({
    token: "skRw4Ig0qQGsM6JtTSiArhmRmRzwoLsCLqu3Lq4VX7RE6MWt0Vibh1fh2Noc8e2LqiZHM92CELiuJJbL2jil9wmSepTjCyphF6hg9pUR91P5QWZiHNCFcoE86mnCRMFg0Q19zcvt4NwrNk4pmZoAJnPZ24GoSqJIm0XAaLGBNPq2vQG4a3b9",
    projectId: "p8svrcay",
    dataset: "production"
})