"Use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormLabel,
    FormItem,
    FormMessage,
    FormField,
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"
import { TextareaHTMLAttributes } from "react"

type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S,
    className?: string,
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextAreaWithLabel<S>({ 
    fieldTitle, 
    nameInSchema, 
    className, 
    ...rest 
}: Props<S>) {
    const form  = useFormContext()

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
                    <FormControl>
                        <Textarea 
                            cols={30}
                            rows={10} 
                            maxLength={100}  
                            id={nameInSchema as string}
                            className={className}
                            {...field}
                            {...rest}
                         />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}