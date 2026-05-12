import { Card, CardHeader ,CardContent,CardTitle} from "./ui/card";

export default function Feature({Icon, title, description}:{
    Icon: React.ComponentType<{className?:string}>
    title:string
    description:string
}){
    return(
        <Card>
            <CardHeader>
                <Icon className="text-primary mb-2"/>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}