import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const MultiInput = ({
  field, setter, itemClass
}: {
  field: Array<string>, setter: (params: Array<string>) => void,
  itemClass: string, [otherProps: string]: any
}) => {

  const handleChange = (index: number, value: string, field: Array<string>, setter: (param: Array<string>) => void) => {
    const newField: Array<string> = [...field];
    newField[index] = value;
    setter(newField);
  }

  const addField = (field: Array<string>, setter: (param: Array<string>) => void) => {
    setter([...field, '']);
  }

  const removeField = (index: number, field: Array<string>, setter: (param: Array<string>) => void) => {
    field.splice(index, 1);
    const newField = [...field];
    setter(newField);
  };


  return (
    <div>
      {
        field.map((item: string, index: number) => {
          return (
            <div className="m-2 flex justify-between" key={index}>
              <Input
                type="text"
                placeholder={`${itemClass} #${index + 1}`}
                value={item}
                onChange={
                  (evt) => {
                    handleChange(index, evt.target.value, field, setter);
                  }}
              />
              <Button
                className="text-brown-100 bg-brown-50 ml-2"
                variant="ghost"
                onClick={(evt) => {
                  evt.preventDefault();
                  removeField(index, field, setter)
                }}
              >
                <FontAwesomeIcon icon={faTrash} className="fas fa-trash" />
              </Button>
            </div>
          );
        })
      }
      <Button
        className="text-brown-100"
        variant="ghost"
        onClick={(evt) => {
          evt.preventDefault();
          addField(field, setter)
        }}
      >
        + Add
      </Button>
    </div>
  );
};


export default MultiInput;