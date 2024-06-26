import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #videos = new Map()

    // SET = NAO ACEITA DADOS DUPLICADOS, MAP - API FORMA DE TRABALHAR DIFERENTE

    list(search) {
        return Array.from(this.#videos.entries())
        .map((videoArray) => {
          const id = videoArray[0]  
          const data = videoArray[1]

          return {
            id,
            ...data,
          }
        })
        .filter(video => {
            if (search) {
                return video.title.includes(search)
            }

            return true
        }) 
    }    

    create(video) {
        const videosId = randomUUID()  // UUID - UNIVERSAL UNIQUE ID
       
        this.#videos.set(videosId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
    }

}