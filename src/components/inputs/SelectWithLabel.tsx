"Use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormLabel,
    FormItem,
    FormMessage,
    FormField,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type DataObject = {
    id: string,
    name: string,
}

type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S,
    data: DataObject[]
    className?: string,
}

export function SelectWithLabels<S>({ fieldTitle, nameInSchema, data, className, ...rest }: Props<S>) {
    const form = useFormContext()

    return (
        <FormField
            control={form.control}
            name={nameInSchema as string}
            render={({ field }) => (
                <FormItem>
                    <FormLabel
                        htmlFor={nameInSchema as string}
                        className="block text-sm font-medium text-gray-700"
                    >
                        {fieldTitle}
                    </FormLabel>
                    <Select
                        {...field}
                        onValueChange={field.onChange}
                    >


                        <FormControl>
                            <SelectTrigger
                                id={nameInSchema as string}
                                className={`W-full max-w-xs ${className} `}
                            >
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {data.map((item) => (
                                <SelectItem key={item.id} value={item.id}>
                                    {item.name}
                                </SelectItem>
                            ))}
                        </SelectContent>

                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}