"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useAppSelector } from "@/lib/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { PlainError } from "../errors/plain-error";

type Inputs = {
  username: string;
  birthdate: string;
  position: string;
  avatar: string;
};

export function UserSettingsForm() {
  const userData = useAppSelector((state) => state.user);
  const [date, setDate] = useState(() => userData.user?.birthdate);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("data", data);

    // try {
    //   const res = await axios.post(`${getApiUrl()}/contact`, data);
    //   if (res.status === 204) {
    //     toast.success(
    //       "Thank you for your message, we will get back to you as soon as possible.",
    //       {
    //         duration: 4000,
    //       }
    //     );
    //     reset();
    //   }
    // } catch (e) {
    //   toast.error((e as Error).message);
    //   Bugsnag.notify(e as Error);
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 space-y-4">
        <div>
          <Label htmlFor="Avatar" className="flex mb-2">
            Avatar
          </Label>

          <Input
            id="Avatar"
            type="file"
            placeholder="Avatar"
            // defaultValue={userData.user?.username}
            className="focus-visible:ring-offset-0 focus-visible:ring-0"
            {...register("username", {
              required: {
                message: "required",
                value: true,
              },
            })}
          />

          <PlainError error={errors.username?.message} />
        </div>

        <div>
          <Label htmlFor="username" className="flex mb-2">
            Username
          </Label>

          <Input
            id="username"
            type="text"
            placeholder="Username"
            defaultValue={userData.user?.username}
            className="focus-visible:ring-offset-0 focus-visible:ring-0"
            {...register("username", {
              required: {
                message: "required",
                value: true,
              },
            })}
          />

          <PlainError error={errors.username?.message} />
        </div>

        <div>
          <Label className="flex mb-2">Birthdate</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-gray-400"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="email" className="flex mb-2">
            Email
          </Label>

          <Input
            id="email"
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={userData.user?.email}
            disabled
          />
        </div>

        <div>
          <Label htmlFor="position" className="flex mb-2">
            Position
          </Label>

          <Input
            id="position"
            type="text"
            placeholder="Position"
            defaultValue={userData.user?.position}
            {...register("position", {
              required: {
                message: "required",
                value: true,
              },
            })}
          />
        </div>
      </div>

      <Button>Save</Button>
    </form>
  );
}
