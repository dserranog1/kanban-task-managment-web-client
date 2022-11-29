import { Component } from "solid-js";
import { createForm, Field, Form, required } from "@modular-forms/solid";
import { TextInput } from "./TextInputForm";

type BoardForm = {
  boardName: string;
  columns: string[];
};

const CreateBoardModalContent: Component = () => {
  const createBoardForm = createForm<BoardForm>();
  return (
    <>
      <h2 class="text-lg font-bold text-light-dark">Add New Board</h2>
      <div class="flex flex-col">
        <Form
          of={createBoardForm}
          onSubmit={() => console.log("sending form..")} //TODO send backend payload
        >
          <Field
            name="boardName"
            of={createBoardForm}
            validate={[required("Please enter a valid name")]}
          >
            {(field) => (
              <TextInput
                {...field.props}
                type="text"
                label="Name"
                value={field.value}
                error={field.error}
                required
              />
            )}
          </Field>
          <input type="submit" value="Submit" />
        </Form>
      </div>
      <div></div>
      <div></div>
    </>
  );
};

export default CreateBoardModalContent;
