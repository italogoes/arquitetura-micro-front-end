import { sum } from "@alura/utils/math/sum"
import { Text } from "@alura/design-system/components/Text"

export default function HomeScreen(){
    return (
        <div>
            <h1>oi, sua soma é: {sum(2,2)}</h1>
            <Text tag="h1">Meu componente de título</Text>
            <Text tag="p">Meu componente de texto</Text>
        </div>
    )
}