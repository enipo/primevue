const PickListProps = [
    {
        name: 'modelValue',
        type: 'array',
        default: 'null',
        description: 'Value of the component as a multidimensional array.'
    },
    {
        name: 'selection',
        type: 'array',
        default: 'null',
        description: 'Selected items in the list as a multidimensional array.'
    },
    {
        name: 'metaKeySelection',
        type: 'boolean',
        default: 'true',
        description:
            'Defines whether metaKey is requred or not for the selection. When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.'
    },
    {
        name: 'dataKey',
        type: 'string',
        default: 'null',
        description: 'Name of the field that uniquely identifies the a record in the data.'
    },
    {
        name: 'listStyle',
        type: 'object',
        default: 'null',
        description: 'Inline style of the the list element.'
    },
    {
        name: 'responsive',
        type: 'boolean',
        default: 'true',
        description: 'Whether the list optimizes layout based on screen size.'
    },
    {
        name: 'breakpoint',
        type: 'string',
        default: '960px',
        description: 'The breakpoint to define the maximum width boundary when responsiveness is enabled.'
    },
    {
        name: 'stripedRows',
        type: 'boolean',
        default: 'false',
        description: 'Whether to displays rows with alternating colors.'
    },
    {
        name: 'showSourceControls',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show buttons of source list.'
    },
    {
        name: 'showTargetControls',
        type: 'boolean',
        default: 'true',
        description: 'Whether to show buttons of target list.'
    },
    {
        name: 'tabindex',
        type: 'number',
        default: '0',
        description: 'Index of the list element in tabbing order.'
    },
    {
        name: 'targetListProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLAttributes to the target list element.'
    },
    {
        name: 'sourceListProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLAttributes to the source list element.'
    },
    {
        name: 'moveUpButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move up button inside the component.'
    },
    {
        name: 'moveTopButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move top button inside the component.'
    },
    {
        name: 'moveDownButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move down button inside the component.'
    },
    {
        name: 'moveBottomButtonProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move bottom button inside the component.'
    },
    {
        name: 'moveToTargetProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move to target button inside the component.'
    },
    {
        name: 'moveAllToTargetProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move all to target button inside the component.'
    },
    {
        name: 'moveToSourceProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move to source button inside the component.'
    },
    {
        name: 'moveAllToSourceProps',
        type: 'object',
        default: 'null',
        description: 'Uses to pass all properties of the HTMLButtonElement to the move all to source button inside the component.'
    },
    {
        name: 'aria-label',
        type: 'string',
        default: 'null',
        description: 'Defines a string value that labels an interactive element.'
    },
    {
        name: 'aria-labelledby',
        type: 'string',
        default: 'null',
        description: 'Identifier of the underlying menu element.'
    }
];

const PickListEvents = [
    {
        name: 'reorder',
        description: 'Callback to invoke when the list is reordered.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'array',
                description: 'Ordered list'
            },
            {
                name: 'event.direction',
                type: 'string',
                description: 'Direction of the change; "up", "down", "bottom", "top"'
            },
            {
                name: 'event.listIndex',
                type: 'number',
                description: 'Index of the list that is ordered, 0 represents the source and 1 represents the target list.'
            }
        ]
    },
    {
        name: 'move-to-target',
        description: 'Callback to invoke when one or more items are moved to the target list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'move-all-to-target',
        description: 'Callback to invoke when all items are moved to the target list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'move-to-source',
        description: 'Callback to invoke when one or more items are moved to the source list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'move-all-to-source',
        description: 'Callback to invoke when all items are moved to the source list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.items',
                type: 'object',
                description: 'Moved items'
            }
        ]
    },
    {
        name: 'selection-change',
        description: 'Callback to invoke when one or more items are moved to the other list.',
        arguments: [
            {
                name: 'event.originalEvent',
                type: 'object',
                description: 'Browser event'
            },
            {
                name: 'event.value',
                type: 'array',
                description: 'Selected items'
            }
        ]
    }
];

const PickListSlots = [
    {
        name: 'sourceheader',
        description: "Custom content for the component's source header"
    },
    {
        name: 'item',
        description: 'Custom content for the item'
    },
    {
        name: 'targetheader',
        description: "Custom content for the component's target header"
    },
    {
        name: 'sourcecontrolsstart',
        description: 'Custom content before source control buttons'
    },
    {
        name: 'sourcecontrolsend',
        description: 'Custom content after source control buttons'
    },
    {
        name: 'movecontrolsstart',
        description: 'Custom content before move buttons'
    },
    {
        name: 'movecontrolsend',
        description: 'Custom content after move buttons'
    },
    {
        name: 'targetcontrolsstart',
        description: 'Custom content before target control buttons'
    },
    {
        name: 'targetcontrolsend',
        description: 'Custom content after target control buttons'
    }
];

module.exports = {
    picklist: {
        name: 'PickList',
        description: 'PickList is used to reorder items between different lists.',
        props: PickListProps,
        events: PickListEvents,
        slots: PickListSlots
    }
};
