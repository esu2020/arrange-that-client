import {
    SNAPSHOT_ADD,
    SNAPSHOT_DELETE,
    SNAPSHOT_RENAME,
    SNAPSHOT_REPOSITION,
    SNAPSHOT_SET_CONTAINERS
} from 'actions/actionTypes'

export const snapshotAdd = (snapshot) => ({
    type: SNAPSHOT_ADD,
    snapshot
})

export const snapshotDelete = (snapshotId) => ({
    type: SNAPSHOT_DELETE,
    snapshotId
})

export const snapshotRename = (snapshotId, name) => ({
    type: SNAPSHOT_RENAME,
    snapshotId,
    name
})

export const snapshotReposition = (a, b) => ({
    type: SNAPSHOT_REPOSITION,
    a,
    b
})

export const snapshotSetContainers = (snapshotId, snapshotContainers) => ({
    type: SNAPSHOT_SET_CONTAINERS,
    snapshotId,
    snapshotContainers
})
