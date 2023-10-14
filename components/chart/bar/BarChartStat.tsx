
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import Bar from './Bar'

const SelectOptions =() => {
  return (
    <Select>
        <SelectTrigger className="bg-blue-100 w-[100px]">
          <SelectValue placeholder="Quarterly" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="halfyearly">Halfyearly</SelectItem>
            <SelectItem value="annually">Annually</SelectItem>

          </SelectGroup>
        </SelectContent>
      </Select>
  )
}

const BarChartStat = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">Overview</h1>
        <SelectOptions />
      </div>
      <Bar/>
    </>
  )
}

export default BarChartStat
