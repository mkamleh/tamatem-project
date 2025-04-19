def validate_number(value: str, name: str):
    """
    General method to validate any number passed as a string.
    Ensures the value is a positive integer.
    
    :param value: The value to be validated.
    :param name: The name of the parameter being validated (for error message).
    :return: A tuple of validated number or None, and an error message if invalid.
    """
    try:
        number = int(value)
    except ValueError:
        return None, f"Invalid {name}, must be an integer"
    
    if number <= 0:
        return None, f"Invalid {name}, should be greater than 0"
    
    return number, None


def validate_page(page: str):
    """
    Validates the page number, ensuring it is an integer and greater than 0.
    :param page: The page value to validate.
    :return: Validated page number or an error message.
    """
    return validate_number(page, "page")

def validate_id(id: str):
    """
    Validates the id number, ensuring it is an integer and greater than 0.
    :param id: The id value to validate.
    :return: Validated id number or an error message.
    """
    return validate_number(id, "id")


def validate_size(size: str):
    """
    Validates the size parameter, ensuring it is an integer and greater than 0.
    :param size: The size value to validate.
    :return: Validated size or an error message.
    """
    return validate_number(size, "size")