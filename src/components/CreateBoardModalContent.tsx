import { Component, For, Show } from "solid-js";
import {
  createForm,
  Field,
  FieldArray,
  Form,
  required,
  insert,
  remove,
  handleSubmit,
} from "@modular-forms/solid";
import { TextInput } from "./TextInputForm";
import InputLabel from "./InputLabel";
import FormButton from "./FormButton";
import IconCross from "./icons/IconCross";

type BoardForm = {
  boardName: string;
  columns: string[];
};

const CreateBoardModalContent: Component = () => {
  const createBoardForm = createForm<BoardForm>({});

  const createBoard = () => {
    // TODO: send payload to the backend
  };
  return (
    <>
      <div class="flex h-fit w-full flex-col rounded-md bg-white p-8">
        <h2 class="mb-6 text-lg font-bold text-light-dark">Add New Board</h2>
        <Form
          of={createBoardForm}
          onSubmit={() => console.log("sending form..")} //TODO send backend payload
        >
          <Field
            name="boardName"
            of={createBoardForm}
            validate={[required("Can't be empty")]}
          >
            {(field) => (
              <TextInput
                {...field.props}
                type="text"
                label="Name"
                value={field.value}
                error={field.error}
                placeholder="e.g Web Design"
              />
            )}
          </Field>
          <FieldArray of={createBoardForm} name="columns">
            {(fieldArray) => (
              <>
                <Show when={fieldArray.items.length}>
                  <InputLabel
                    name={fieldArray.name}
                    label="Columns"
                    margin="none"
                  />
                </Show>

                <For each={fieldArray.items}>
                  {(_, idx) => (
                    <Field
                      validate={[required("Can't be empty")]}
                      name={`columns.${idx()}`}
                      of={createBoardForm}
                    >
                      {(field) => (
                        <div class="mt-3 flex w-full flex-row items-center gap-4">
                          <TextInput
                            {...field.props}
                            type="text"
                            customWidth="w-full"
                            value={field.value}
                            error={field.error}
                            placeholder="Write the name of your column"
                          />
                          <button
                            onClick={() =>
                              remove(createBoardForm, "columns", {
                                at: idx(),
                              })
                            }
                          >
                            <IconCross
                              classes={
                                field.error
                                  ? "fill-input-error"
                                  : "fill-medium-grey"
                              }
                            />
                          </button>
                        </div>
                      )}
                    </Field>
                  )}
                </For>
              </>
            )}
          </FieldArray>
          <FormButton
            backgroundColor="bg-main-purple/10"
            textColor="text-main-purple"
            handleOnClick={() => {
              insert(createBoardForm, "columns");
            }}
            text="+ Add New Column"
          />
          <FormButton
            backgroundColor="bg-main-purple"
            textColor="text-white"
            text="Create New Board"
            handleOnClick={() => {
              handleSubmit(createBoardForm, createBoard);
            }}
          />
        </Form>
      </div>
    </>
  );
};

export default CreateBoardModalContent;
