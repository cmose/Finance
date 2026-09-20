# Initial Request

## Goal

Create a planning and coordination workspace for a multi-agent execution flow in this repository.

## Required Agent Swarm

1. **PM-Agent**
   - Research the request
   - Define scope
   - Delegate work across phases and agents
2. **SWE-Agent**
   - Create backend work using mock data for now
3. **Design-Agent**
   - Own frontend work
   - Maintain high-quality visual cohesion and design consistency
4. **QA-Agent**
   - Perform final code reviews
   - Call out errors and route them to the correct agent

## Required Deliverables

- A `plan` folder
- A `plan.md` file for each agent/phase
- A log file for each agent with timestamped completed or in-progress work
- A shared overview memory file summarizing completed work for other agents

## Agent Operating Instructions

For each agent:

1. Read the spec created
2. Execute all assigned tasks
3. Log and timestamp work in the phase log file
4. Update status in the overview memory file
5. Proceed to the next phase
