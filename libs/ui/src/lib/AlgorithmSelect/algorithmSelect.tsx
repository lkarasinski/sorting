import * as React from 'react';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';
import { SortingAlgorithms } from '@sorting/types';
import _ from 'lodash';
import {
  Box,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './algorithmSelect.style';

type SelectProps = {
  allAlgorithms: SortingAlgorithms[];
  availableAlgorithms: SortingAlgorithms[];
  value: SortingAlgorithms;
  setValue: (value: SortingAlgorithms) => void;
  disabled: boolean;
};

export const AlgorithmSelect = ({
  allAlgorithms,
  availableAlgorithms,
  value,
  setValue,
  disabled,
}: SelectProps) => {
  return (
    <Box>
      <Select
        defaultValue="quick"
        value={value}
        onValueChange={(value) => setValue(value as SortingAlgorithms)}
      >
        <SelectTrigger
          aria-label="Algorithms"
          disabled={disabled}
          state={disabled ? 'disabled' : 'default'}
        >
          <SelectValue />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Algorithms</SelectLabel>
              {allAlgorithms.map((algorithm) => (
                <SelectItem
                  key={algorithm}
                  value={algorithm}
                  disabled={!availableAlgorithms.includes(algorithm)}
                >
                  <SelectItemText>
                    {_.capitalize(algorithm)} Sort
                  </SelectItemText>
                  {algorithm === value && (
                    <SelectItemIndicator>
                      <CheckIcon />
                    </SelectItemIndicator>
                  )}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </Box>
  );
};
