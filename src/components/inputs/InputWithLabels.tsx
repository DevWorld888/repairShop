"Use client"

import { useFormContext } from "react-hook-form"

import {
    FormControl,
    FormLabel,
    FormItem,
    FormMessage,
    FormField,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { InputHTMLAttributes } from "react"

type Props<S> = {
    fieldTitle: string,
    nameInSchema: keyof S,
    className?: string,
} & InputHTMLAttributes<HTMLInputElement>

export function InputWithLabels<S>({ fieldTitle, nameInSchema, className, ...rest }: Props<S>) {
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
                        <Input 
                            id={nameInSchema as string}
                            className={`W-full mt-1 ${className} dark:disabled:text-green-50`}
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